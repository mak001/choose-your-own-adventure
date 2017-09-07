<?php

namespace Dynamic\Adventure\Models;

use SilverStripe\Assets\Image;
use SilverStripe\ORM\DataObject;

class AdventurePage extends DataObject
{

    /**
     * The name of the table (would default to Dynamic\Adventure\Models\AdventurePage)
     *
     * @var string
     */
    private static $table_name = 'AdventurePage';

    /**
     * @var array
     */
    private static $db = array(
        'Content' => 'Varchar(255)'
    );

    private static $has_one = array(
        'Image' => Image::class
    );

    /**
     * @var array
     */
    private static $has_many = array(
        "Choices" => AdventureChoice::class
    );

    /**
     * @var array
     */
    private static $searchable_fields = array(
        'Content'
    );

    /**
     * @var array
     */
    private static $summary_fields = array(
        'ID',
        'ShortContent'
    );

    /**
     * @return string
     */
    public function getShortContent()
    {
        return mb_strimwidth($this->Content, 0, 25, "...");
    }

    /**
     * custom labels for fields
     *
     * @param bool $includerelations
     * @return array|string
     */
    public function fieldLabels($includerelations = true)
    {
        $labels = parent::fieldLabels($includerelations);
        $labels['ShortContent'] = 'Content';
        return $labels;
    }

    /**
     * So everyone can view
     *
     * @param null $member
     * @return bool
     */
    public function canView($member = null)
    {
        return true;
    }

}
