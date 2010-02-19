

var sys = require('sys'),
colors = require('./lib/termcolors').colors;

/*
var red = colors.red(colors.bg_dgray(colors.bold('This should be bold red with a dark gray bg.')));
var blue = colors.blue('This should be blue.', true);
var purple = colors.purple(colors.bg_lgray('This should be purple with a light gray bg.'));
var yellow = colors.yellow('This should be yellow.', true);


sys.puts('none ' + red + ' :: ' + blue + ' :: none again');
sys.puts('none ' + colors.bold(yellow) + ' :: ' + purple + ' :: none again');
*/

var c, b, txt = ' (foo) ';   // The test text

for (c in colors.fg) {
    sys.print(c + "\t" + colors.bold(c) + "\t" + colors[c](txt, 1));
    sys.print("\t" + colors[c](colors.bold(txt), 1));
    for (b in colors.bg) {
        sys.print("\t" + colors['bg_' + b](colors[c](txt)));
        sys.print("\t" + colors['bg_' + b](colors[c](colors.bold(txt))));
    }
    sys.print("\n");
}

