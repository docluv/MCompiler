# MCompiler
## A microjs jQuery compatible library

MCompiler is a microjs library that implements simple methods to accomplish 
tasks using the same names and signatures featured in jQuery. Unlike jQuery, 
which weighs a little over 91kb minified, MCompiler is around 8kb. MCompiler
is NOT compatible with outdated browsers, but does work with all modern browsers
including Internet Explorer 10+, Chrome, FireFox and Safari.

Not all jQuery methods are supported. For example there are no animation related 
methods. Animations are the domain of CSS and should be defined in CSS files,
using trasitions, transforms and key-frame animations. Instead of animate()
you would add and remove classes from an element using MCompiler.

MCompiler is designed to be extensible, just like jQuery. While some existing 
jQuery plugins should work just fine, many that rely on unsupported functions
will not. 



