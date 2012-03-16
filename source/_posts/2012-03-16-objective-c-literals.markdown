---
layout: post
title: "objective-c-literals"
date: 2012-03-16 14:09
comments: true
categories: [objective-c,macruby]
---
Mark Dalrymple [posts](http://weblog.bignerdranch.com/?p=398) about the new literal syntax in Objective-C. One reason that I prefer MacRuby is Ruby's terse syntax for creating literals. With MacRuby, I can create dictionaries the standard Ruby way:

``` ruby
dict = { :foo => "bar" }
```

The new literals make creating Objective-C dictionaries (and arrays) easier, but not quite as easy as Ruby:

``` objective-c
NSDictionary *splunge = @{ @"hi" :  @"bork", @"greeble" :  @"bork" };
```

Not bad and, at first glance, better than the old `NSDictionary dictionaryWithObjectsAndKeys:`. Check out Mark's post for more.

