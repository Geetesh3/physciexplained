<?php
/*
Plugin Name: Quotable Insights
Description: Display daily quotes from quotesquests.com.
Version: 1.1.0
Author: <a href="https://quotesquests.com/wordpress-plugins/">Quotes Quests</a>
*/

// Default values for iframe styles
$daily_quotes_width = '100%';
$daily_quotes_height = '600px';
$daily_quotes_styles = 'border: none; overflow: hidden;';

// Check if the form has been submitted
if (isset($_POST['daily_quotes_submit'])) {
    // Update the values if the form has been submitted
    $daily_quotes_width = sanitize_text_field($_POST['daily_quotes_width']);
    $daily_quotes_height = sanitize_text_field($_POST['daily_quotes_height']);
    $daily_quotes_styles = sanitize_text_field($_POST['daily_quotes_styles']);
    update_option('daily_quotes_width', $daily_quotes_width);
    update_option('daily_quotes_height', $daily_quotes_height);
    update_option('daily_quotes_styles', $daily_quotes_styles);
}

// Retrieve saved values from options
$daily_quotes_width = get_option('daily_quotes_width', $daily_quotes_width);
$daily_quotes_height = get_option('daily_quotes_height', $daily_quotes_height);
$daily_quotes_styles = get_option('daily_quotes_styles', $daily_quotes_styles);

function display_daily_quotes() {
    // Specify the URL of the website from which you want to fetch content
    $url = 'https://quotesquests.com/daily-quotes/';

    // Enqueue the custom CSS file
    wp_enqueue_style('daily-quotes-styles', plugin_dir_url(__FILE__) . 'daily-quotes-styles.css');

    global $daily_quotes_width, $daily_quotes_height, $daily_quotes_styles;

    // Display an iframe with the specified URL and styles
    echo '<iframe src="' . esc_url($url) . '" style="width: ' . esc_attr($daily_quotes_width) . '; height: ' . esc_attr($daily_quotes_height) . '; ' . esc_attr($daily_quotes_styles) . '"></iframe>';
}

// Shortcode to display the daily quotes
add_shortcode('daily_quotes', 'display_daily_quotes');

// Add a submenu under the "Tools" menu
function daily_quotes_plugin_menu() {
    add_submenu_page(
        'tools.php',
        'Daily Quotes Plugin',
        'Daily Quotes',
        'manage_options',
        'daily_quotes_settings',
        'daily_quotes_plugin_settings'
    );
}

// Callback function for the "Settings" section
function daily_quotes_plugin_settings() {
    global $daily_quotes_width, $daily_quotes_height, $daily_quotes_styles;
    ?>
    <div class="wrap">
        <h1>Quotable Insights Plugin Settings</h1><br><br>
    	<p>This plugin allows you to display daily quotes from quotesquests.com on your WordPress site.</p><br>
    	<h2>Usage:</h2><br>
   	<p>To display daily quotes, simply use the following shortcode in your post or page:</p><br>
   	<pre>[daily_quotes]</pre><br><br>
	<h2>Style Setting</h2><br>

        <form method="post" action="">
            <label for="daily_quotes_width" style="tab-size: 8;">Width:</label>	
            <input type="text" name="daily_quotes_width" value="<?php echo esc_attr($daily_quotes_width); ?>"><br>

            <label for="daily_quotes_height" style="tab-size: 8;">Height:</label>	
            <input type="text" name="daily_quotes_height" value="<?php echo esc_attr($daily_quotes_height); ?>"><br>

            <label for="daily_quotes_styles" style="tab-size: 8;">Styles:</label>	
            <input type="text" name="daily_quotes_styles" value="<?php echo esc_attr($daily_quotes_styles); ?>"><br><br>
		
            <input type="submit" name="daily_quotes_submit" value="Save Changes">
        </form>
    </div>
    <?php
}

// Hook the menu function to the admin menu
add_action('admin_menu', 'daily_quotes_plugin_menu');

// Add a link to the user guide in the plugin section of the WordPress admin
function daily_quotes_plugin_user_guide($links) {
    $user_guide_link = '<a href="' . esc_url(admin_url('tools.php?page=daily_quotes_settings')) . '">View Settings</a>';
    array_unshift($links, $user_guide_link);
    return $links;
}

// Hook the user guide link function to the plugin_row_meta filter
add_filter('plugin_row_meta', 'daily_quotes_plugin_user_guide', 10, 2);
