#!/usr/bin/env sh
# 本地预览博客，几秒后自动打开 http://localhost:4000/ ，按 Ctrl+C 停止
URL=http://localhost:4000/
case "$(uname -s)" in
  Darwin) (sleep 6; open "$URL") & ;;
  MINGW*|MSYS*|CYGWIN*) (sleep 6; start "$URL") & ;;
  *) (sleep 6; xdg-open "$URL" >/dev/null 2>&1) & ;;
esac
npx hexo server
