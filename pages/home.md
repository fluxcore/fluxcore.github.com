<div class="huge about">
	<a class="button" href="#/download">Click here to download!</a>
</div>

What is FluxCore?
-----------------

FluxCore is an application framework for PHP made for those that are
looking for a framework but without all the extra "fuss".

It is meant to be used as an absolute base for you to implement
features as you see fit and everything on the application end is easily
accessible for modifications.

What is included with FluxCore?
-------------------------------

The components implement the following packages by default:

 * illuminate/support
   * Used laravel ServiceProvider support.
 * illuminate/container
   * Used as IoC container extended by the Application class.
 * symfony/http-foundation
   * Base HTTP foundation classes used for it's Request class among others.

The application implements the following packages by default:

 * fluxcore/components
   * The core components of FluxCore.
 * illuminate/view
   * Used to present data to the end-user primarily because of it's blade engine.
 * illuminate/database
   * Used to communicate with the database via the Eloquent class.