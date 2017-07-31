<?php


namespace Dynamic\Adventure\Models;


use SilverStripe\ORM\DataObject;

class AdventureChoice extends DataObject
{

    private static $table_name = "AdventureChoice";

    /**
     * @var array
     */
    private static $db = array(
        "Content" => "Varchar(75)",
    );

    /**
     * @var array
     */
    private static $has_one = array(
        "GoTo" => AdventurePage::class,
        "Parent" => AdventurePage::class
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