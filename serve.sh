#!/bin/bash
# Simple script to start a local web server for testing

echo "Starting local web server on port 8000..."
echo "Open your browser to: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python 3 first, then Python 2
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python not found. Please install Python or use another method."
    echo "Alternative: npx http-server -p 8000"
    exit 1
fi
