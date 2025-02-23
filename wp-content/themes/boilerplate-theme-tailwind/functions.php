<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
  wp_enqueue_style('ourstylescss', get_theme_file_uri('/assets/styles.css'));

  wp_localize_script( 'ourmainjs', 'acf_vars', array(
    
    'my_localized_var' => get_field( 'image' ),));

}   

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

/* Disable WordPress Admin Bar for all users */
add_filter( 'show_admin_bar', '__return_false' );
