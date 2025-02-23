<?php
        function boilerplate_load_assets() {
            wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array(), '1.0', array(
                'in_footer'=>true
                ));
        }
        add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

        /* Disable WordPress Admin Bar for all users */
        add_filter( 'show_admin_bar', '__return_false' );
    

?>