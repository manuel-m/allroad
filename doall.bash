#!/usr/bin/env bash

gulp
rm -rf allroad_template 2>/dev/null
mv dist allroad_template
rm -rf allroad_template/app
tar cvfj allroad_template.bz2 allroad_template
rm -rf allroad_template