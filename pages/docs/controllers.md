Controllers
=

Implementation
-

By default, controllers are very decoupled from the framework.  
There is no abstract controller class to derive from meaning you can
create your own controller base and derive from that, use a basic class with
no inheritance, or just not use a controller at all and handle pages right
in the route handler.

Because there is no base controller, the implementation of controllers
is entirely up to you.  
There is however a "base" for you to implement controllers on though,
the directory `app/controller/` is added to the **ClassLoader** so all you
have to do is define your controller-related classes in there according
to the PSR-0 standard and the rest will be cake.