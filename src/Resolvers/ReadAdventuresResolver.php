<?php


namespace Dynamic\Adventure\Resolvers;


use Dynamic\Adventure\Models\AdventurePage;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ResolverInterface;

class ReadAdventuresResolver implements ResolverInterface
{

    /**
     * Resolves graphql query parameters
     *
     * @param \SilverStripe\ORM\DataObjectInterface $object
     * @param array $args
     * @param array $context
     * @param \GraphQL\Type\Definition\ResolveInfo $info
     * @return $this|\SilverStripe\ORM\DataList
     */
    public function resolve($object, $args, $context, $info) {
        $list = AdventurePage::get();

        if (isset($args['ID'])) {
            $list = $list->filter('ID', $args['ID']);
        }
        // TODO expand?
        return $list;
    }

}