@echo off
setlocal

set "ROOT_DIR=%~dp0.."

call :update_nav "writing" "writingNav.js" "writing"
call :update_nav "design" "designNav.js" "design"

echo Done.
exit /b 0

:update_nav
set "DIR=%~1"
set "NAV_FILE=%~2"
set "INDEX_NAME=%~3"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$dir='%DIR%'; $nav='%NAV_FILE%'; $index='%INDEX_NAME%';" ^
  "$target=Join-Path '%ROOT_DIR%' $dir; $navPath=Join-Path $target $nav;" ^
  "if (!(Test-Path $navPath)) { Write-Host ('Skip: ' + $navPath + ' not found'); exit 0 }" ^
  "$files=Get-ChildItem -Path $target -Filter '*.html' | Where-Object { $_.BaseName -ne $index };" ^
  "$names=$files | Sort-Object BaseName | ForEach-Object { '        { text: \"' + $_.BaseName + '\" },' };" ^
  "$data=$names -join \"`n\";" ^
  "$start='// NAV_DATA_START'; $end='// NAV_DATA_END';" ^
  "$content=Get-Content -Path $navPath;" ^
  "$out=@(); $in=$false; foreach($line in $content) {" ^
  "  if($line -match [regex]::Escape($start)) { $out+=$line; if($data){ $out+=$data }; $in=$true; continue }" ^
  "  if($line -match [regex]::Escape($end)) { $in=$false; $out+=$line; continue }" ^
  "  if(-not $in) { $out+=$line }" ^
  "}" ^
  "Set-Content -Path $navPath -Value $out -Encoding UTF8;" ^
  "Write-Host ('Updated: ' + $navPath)"

exit /b 0
