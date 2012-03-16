---
layout: post
title: "Deploying JRuby"
date: 2012-03-09 14:11
comments: true
categories: [ruby, jruby, torquebox]
published: false
---
I've been excited about [JRuby](http://jruby.org) for a while now. JRuby provides developers with all of the goodness of Ruby with the robustness of the JVM. I've played around with JRuby through [Torquebox](http://torquebox.org) and I use JRuby as my default Ruby for development, but I've never had to _deploy_ a JRuby application. I'm not sure I would even know where to begin (although I would be sure to figure it out!). Fortunately, [Joe Kutner](https://twitter.com/codefinger) figured everything out and wrote a book about it:  [Deploying JRuby](http://pragprog.com/book/jkdepj/deploying-with-jruby).

In _Deploying JRuby_, Kutner takes a typical MRI-based web application, converts it to JRuby, and deploys the application to various environments. So what's "a typical MRI-based web application"? The application that Kutner describes is a Rails application running on Mongrel and Apache with Resque running background jobs and Daemons tracking long-running jobs. The jobs are managed by monit. I have a similar app running that uses nginx, Resque, daemons, and god for monitoring, so Kutner's typical application matched my experience well.
