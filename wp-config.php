<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '^JBYK!kRBwt~#6sX{#O+yC}/izyBAlv5qjJEAzNa<G0k.m]Dr.1oj8Bxf$>Xz&$c' );
define( 'SECURE_AUTH_KEY',   '/3<x*Lsr&x^RIbABG&2d].4p)bA!6F{y):KU^L)[oeC=q#ee$qEWh1|!9z(MQ^j`' );
define( 'LOGGED_IN_KEY',     'd$Q6F~l4tGIM2%/uy:hqO6[R52J[=R!)q`:L8oUZv67Ij$;|z6H&d1^sE20Q[eP%' );
define( 'NONCE_KEY',         'rF!(|XcQ-H]pu:obuh|aq-7dHfE(fu=fs{GB+~e>A25j/}Rna.;g+4V47N-qq-%,' );
define( 'AUTH_SALT',         '[`)a|@/+mKC+xpQ*$;}Zaln7<T>$k7xmy]??/HgaD( bfUxu).Xk_4!*Mm9nee}t' );
define( 'SECURE_AUTH_SALT',  'Y_8FKh*604E1G(j&]]hev&OM!j+]p`lx~Og0i<WWy{d`e&zhZ~t+,4NF[6M=PXVO' );
define( 'LOGGED_IN_SALT',    '1L#NJQ{_Af#*%g5#We1>4{v `h$/[f IALb _&COxk(O@qm1Cg]Xg<ait+IUeN}G' );
define( 'NONCE_SALT',        ';*aNOfH}@gk4u~6hd%iU_ZNU:$B/Lmv2OS`9&Yqcy.b=|C6CLsjGD6D0O31Vel7n' );
define( 'WP_CACHE_KEY_SALT', 'QEAP;$ZM>v __$q/KkW.N-BA}y/!ObdzZ6mFA3bJ1fgj4h{ia=/-)sX;&LpQ=vFQ' );


define('JWT_AUTH_SECRET_KEY', 'Vl85]@Pt*Rp+|,?*p-wuGF4+0M<0;kk Y#lVD#r@-lJ|Wj$D#+zZUg7D1_fzvs+y');

define('JWT_AUTH_CORS_ENABLE', true);
/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';



//define('TOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmVhY3QtZXhhbXBsZS5sb2NhbCIsImlhdCI6MTczODg1NjMwMiwibmJmIjoxNzM4ODU2MzAyLCJleHAiOjE3Mzk0NjExMDIsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.i7OgflLdyn8s_I_cXjqORZE8y2C8TrgLPAmmhTOj_GA');

