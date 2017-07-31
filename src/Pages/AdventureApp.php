<?php

namespace Dynamic\Adventure\Pages;

use \Page;
use SilverStripe\Control\Controller;
use SilverStripe\Control\Director;

class AdventureApp extends Page
{

    /**
     * The API URL
     *
     * @return string
     */
    public function ApiUrl()
    {
        return Controller::join_links(Director::baseURL(), 'graphql');
    }

}
