#!/bin/bash

# 切换到脚本所在的目录
cd "$(dirname "$0")"

# 获取当前目录下所有的HTML文件名
html_files=$(ls *.html)

# 创建或清空nav.md文件
> nav.md

# 用于保存所有文件名的变量
all_filenames=""

# 循环遍历所有HTML文件，获取文件名
for file in $html_files; do
    # 提取文件名（去掉扩展名）
    filename=$(basename -- "$file" .html)
    # 将文件名追加到all_filenames变量中
    all_filenames+="$filename"$'\n'
done

# 将所有文件名一次性写入nav.md文件
echo "$all_filenames" >> nav.md

echo "导航文件已生成: nav.md"