#!/usr/bin/env bash                            

if [ -f index.html ]; then          # which flag means "is it a FILE?"
    echo "✅ index.html found"
    exit 0                          # success number
else
    echo "❌ index.html is missing"
    exit 1                        # failure number
fi