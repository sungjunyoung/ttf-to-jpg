#!/usr/bin/env node

var args = require('args')


args
.option('ttf_dir', 'directory path that includes ttf', 'ttf_dir')
.option('jpg_dir', 'directory path that includes jpg results', 'jpg_dir')

let flags = args.parse(process.argv)

// console.log(flags);