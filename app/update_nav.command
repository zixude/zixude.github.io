#!/bin/bash
set -e

root_dir="$(cd "$(dirname "$0")/.." && pwd)"

update_nav() {
  local dir="$1"
  local nav_file="$2"
  local index_name="$3"
  local target_dir="${root_dir}/${dir}"
  local target_nav="${target_dir}/${nav_file}"

  if [ ! -f "$target_nav" ]; then
    echo "Skip: ${target_nav} not found"
    return
  fi

  local data=""
  local file
  for file in "${target_dir}"/*.html; do
    [ -e "$file" ] || continue
    local base
    base="$(basename "$file" .html)"
    if [ "$base" = "$index_name" ]; then
      continue
    fi
    data+="        { text: \"${base}\" },\n"
  done

  local tmp_file
  tmp_file="$(mktemp)"
  awk -v data="$data" '
    /NAV_DATA_START/ { print; if (data != "") printf "%s", data; in_block=1; next }
    /NAV_DATA_END/ { in_block=0; print; next }
    !in_block { print }
  ' "$target_nav" > "$tmp_file"

  mv "$tmp_file" "$target_nav"
  echo "Updated: ${target_nav}"
}

update_nav "writing" "writingNav.js" "writing"
update_nav "design" "designNav.js" "design"

echo "Done."
