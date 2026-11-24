#!/bin/bash

echo "Starting React build verification..."

# Check whether dist directory exists
if [ -d "dist" ]; then
    echo "dist directory exists."

    # Check whether index.html exists inside dist
    if [ -f "dist/index.html" ]; then
        echo "SUCCESS: index.html found inside dist/"
        echo "Build verification passed."
    else
        echo "ERROR: index.html not found inside dist/"
        exit 1
    fi

else
    echo "ERROR: dist directory does not exist."
    exit 1
fi