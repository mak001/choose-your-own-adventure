<?php


namespace Dynamic\Adventure\Admin;


use Dynamic\Adventure\Models\AdventurePage;
use SilverStripe\Admin\ModelAdmin;

class AdventureAdmin extends ModelAdmin
{

    /**
     * @var array
     */
    private static $managed_models = array(
        AdventurePage::class
    );

    /**
     * @var string
     */
    private static $url_segment = "adventure";

    /**
     * @var string
     */
    private static $menu_title = 'Adventure';

}