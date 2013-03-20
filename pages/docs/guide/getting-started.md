Getting Started
=

Downloading the Framework
-

Grab a copy of **FluxCore** by clicking [here](https://github.com/fluxcore/framework/archive/master.zip).

Installing the Framework
-

Extract the downloaded archive and install it in one of the following two ways:

- Create a symbolic link pointing to the `framework/public` directory and place
  the link inside your website root directory.
- Set the `framework/public` as website root directory.

Installing the Dependencies
-

To install the dependencies you need a installation of **Composer** ready on your system.  
You can get composer by going to the [Composer website](http://getcomposer.org/).

When you have **Composer** on your system, install all dependencies by running one
of the following commands in the root folder of your **FluxCore** installation.

### Regular

    composer install

This will install all the required dependencies that **FluxCore** needs in order to run.

### Development

    composer install --dev

This will install all dependencies that the regular `composer install` command installs
as well as some additional development dependencies required for **unit-testing**.

Finished
-

Your installation of **FluxCore** should now be fully functional and you should be greeted
by a `Hello World!` message upon visiting the page where your framework is located.

You can further configure the framework according to your own needs by going through
each file in the `framework/app/config` directory and reviewing all available configuration
options.