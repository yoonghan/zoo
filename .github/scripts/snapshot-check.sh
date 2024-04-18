#!/bin/bash

if ls ./backstop_data/bitmaps_test/*/failed* 1> /dev/null 2>&1; then
    echo "Contains failed snapshot."
    echo "-----"
    echo "Approve the new changes by executing the approve workflow"
    echo "For change comparison, locate it in ./html_report/index.html"
    exit 1
fi
exit 0