<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Faker\Generator as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert(
            [
                [
                    'title'  => 'First Post',
                    'body'    => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ipsum neque, vel cursus est maximus quis. Nunc vitae urna eu quam pretium hendrerit ut nec ex. Nullam venenatis libero quis augue facilisis, at sagittis nisl hendrerit. Ut magna arcu, faucibus id condimentum vel, tincidunt et elit. Nulla facilisi. Phasellus nec mattis lectus, tristique tincidunt eros. Phasellus id efficitur nisi, ullamcorper efficitur dolor. Proin lobortis venenatis massa vel sodales. Fusce luctus laoreet mi eu vulputate. Sed et rutrum felis. Phasellus lobortis ut erat ut tincidunt. Cras vitae maximus lectus. Pellentesque placerat varius mi, in venenatis arcu tincidunt sit amet.

                    Mauris ullamcorper porta orci in rutrum. Nulla dignissim turpis pellentesque leo faucibus, ut aliquam orci pulvinar. Mauris venenatis at sapien at placerat. Donec sed ligula ut elit vestibulum molestie vitae non libero. Praesent congue fermentum risus vitae sodales. Nulla hendrerit eros a magna viverra luctus. Nam viverra nisi ut sapien vestibulum posuere. Mauris feugiat venenatis fermentum. Vivamus at dapibus justo, blandit viverra leo. Praesent fermentum dictum erat, sit amet blandit lectus sollicitudin a. Morbi porta urna vitae mi rhoncus, quis interdum purus lacinia. Nunc congue sapien non quam sodales eleifend vel quis augue. Donec a porta libero. In ornare justo tortor, et aliquam risus scelerisque sed. In lacinia laoreet enim, sed fringilla justo bibendum vel. Aenean dapibus diam nec consequat rutrum.',
                    'created_at'    => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at'    => Carbon::now()->format('Y-m-d H:i:s')
                ],
                [
                    'title'  => 'Second Post',
                    'body'    => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ipsum neque, vel cursus est maximus quis. Nunc vitae urna eu quam pretium hendrerit ut nec ex. Nullam venenatis libero quis augue facilisis, at sagittis nisl hendrerit. Ut magna arcu, faucibus id condimentum vel, tincidunt et elit. Nulla facilisi. Phasellus nec mattis lectus, tristique tincidunt eros. Phasellus id efficitur nisi, ullamcorper efficitur dolor. Proin lobortis venenatis massa vel sodales. Fusce luctus laoreet mi eu vulputate. Sed et rutrum felis. Phasellus lobortis ut erat ut tincidunt. Cras vitae maximus lectus. Pellentesque placerat varius mi, in venenatis arcu tincidunt sit amet.

                    Mauris ullamcorper porta orci in rutrum. Nulla dignissim turpis pellentesque leo faucibus, ut aliquam orci pulvinar. Mauris venenatis at sapien at placerat. Donec sed ligula ut elit vestibulum molestie vitae non libero. Praesent congue fermentum risus vitae sodales. Nulla hendrerit eros a magna viverra luctus. Nam viverra nisi ut sapien vestibulum posuere. Mauris feugiat venenatis fermentum. Vivamus at dapibus justo, blandit viverra leo. Praesent fermentum dictum erat, sit amet blandit lectus sollicitudin a. Morbi porta urna vitae mi rhoncus, quis interdum purus lacinia. Nunc congue sapien non quam sodales eleifend vel quis augue. Donec a porta libero. In ornare justo tortor, et aliquam risus scelerisque sed. In lacinia laoreet enim, sed fringilla justo bibendum vel. Aenean dapibus diam nec consequat rutrum.',
                    'created_at'    => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at'    => Carbon::now()->format('Y-m-d H:i:s')
                ],
                [
                    'title'  => 'Third Post',
                    'body'    => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ipsum neque, vel cursus est maximus quis. Nunc vitae urna eu quam pretium hendrerit ut nec ex. Nullam venenatis libero quis augue facilisis, at sagittis nisl hendrerit. Ut magna arcu, faucibus id condimentum vel, tincidunt et elit. Nulla facilisi. Phasellus nec mattis lectus, tristique tincidunt eros. Phasellus id efficitur nisi, ullamcorper efficitur dolor. Proin lobortis venenatis massa vel sodales. Fusce luctus laoreet mi eu vulputate. Sed et rutrum felis. Phasellus lobortis ut erat ut tincidunt. Cras vitae maximus lectus. Pellentesque placerat varius mi, in venenatis arcu tincidunt sit amet.

                    Mauris ullamcorper porta orci in rutrum. Nulla dignissim turpis pellentesque leo faucibus, ut aliquam orci pulvinar. Mauris venenatis at sapien at placerat. Donec sed ligula ut elit vestibulum molestie vitae non libero. Praesent congue fermentum risus vitae sodales. Nulla hendrerit eros a magna viverra luctus. Nam viverra nisi ut sapien vestibulum posuere. Mauris feugiat venenatis fermentum. Vivamus at dapibus justo, blandit viverra leo. Praesent fermentum dictum erat, sit amet blandit lectus sollicitudin a. Morbi porta urna vitae mi rhoncus, quis interdum purus lacinia. Nunc congue sapien non quam sodales eleifend vel quis augue. Donec a porta libero. In ornare justo tortor, et aliquam risus scelerisque sed. In lacinia laoreet enim, sed fringilla justo bibendum vel. Aenean dapibus diam nec consequat rutrum.',
                    'created_at'    => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at'    => Carbon::now()->format('Y-m-d H:i:s')
                ],
                [
                    'title'  => 'Fourth Post',
                    'body'    => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ipsum neque, vel cursus est maximus quis. Nunc vitae urna eu quam pretium hendrerit ut nec ex. Nullam venenatis libero quis augue facilisis, at sagittis nisl hendrerit. Ut magna arcu, faucibus id condimentum vel, tincidunt et elit. Nulla facilisi. Phasellus nec mattis lectus, tristique tincidunt eros. Phasellus id efficitur nisi, ullamcorper efficitur dolor. Proin lobortis venenatis massa vel sodales. Fusce luctus laoreet mi eu vulputate. Sed et rutrum felis. Phasellus lobortis ut erat ut tincidunt. Cras vitae maximus lectus. Pellentesque placerat varius mi, in venenatis arcu tincidunt sit amet.

                    Mauris ullamcorper porta orci in rutrum. Nulla dignissim turpis pellentesque leo faucibus, ut aliquam orci pulvinar. Mauris venenatis at sapien at placerat. Donec sed ligula ut elit vestibulum molestie vitae non libero. Praesent congue fermentum risus vitae sodales. Nulla hendrerit eros a magna viverra luctus. Nam viverra nisi ut sapien vestibulum posuere. Mauris feugiat venenatis fermentum. Vivamus at dapibus justo, blandit viverra leo. Praesent fermentum dictum erat, sit amet blandit lectus sollicitudin a. Morbi porta urna vitae mi rhoncus, quis interdum purus lacinia. Nunc congue sapien non quam sodales eleifend vel quis augue. Donec a porta libero. In ornare justo tortor, et aliquam risus scelerisque sed. In lacinia laoreet enim, sed fringilla justo bibendum vel. Aenean dapibus diam nec consequat rutrum.',
                    'created_at'    => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at'    => Carbon::now()->format('Y-m-d H:i:s')
                ],
                [
                    'title'  => 'Fifth Post',
                    'body'    => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ipsum neque, vel cursus est maximus quis. Nunc vitae urna eu quam pretium hendrerit ut nec ex. Nullam venenatis libero quis augue facilisis, at sagittis nisl hendrerit. Ut magna arcu, faucibus id condimentum vel, tincidunt et elit. Nulla facilisi. Phasellus nec mattis lectus, tristique tincidunt eros. Phasellus id efficitur nisi, ullamcorper efficitur dolor. Proin lobortis venenatis massa vel sodales. Fusce luctus laoreet mi eu vulputate. Sed et rutrum felis. Phasellus lobortis ut erat ut tincidunt. Cras vitae maximus lectus. Pellentesque placerat varius mi, in venenatis arcu tincidunt sit amet.

                    Mauris ullamcorper porta orci in rutrum. Nulla dignissim turpis pellentesque leo faucibus, ut aliquam orci pulvinar. Mauris venenatis at sapien at placerat. Donec sed ligula ut elit vestibulum molestie vitae non libero. Praesent congue fermentum risus vitae sodales. Nulla hendrerit eros a magna viverra luctus. Nam viverra nisi ut sapien vestibulum posuere. Mauris feugiat venenatis fermentum. Vivamus at dapibus justo, blandit viverra leo. Praesent fermentum dictum erat, sit amet blandit lectus sollicitudin a. Morbi porta urna vitae mi rhoncus, quis interdum purus lacinia. Nunc congue sapien non quam sodales eleifend vel quis augue. Donec a porta libero. In ornare justo tortor, et aliquam risus scelerisque sed. In lacinia laoreet enim, sed fringilla justo bibendum vel. Aenean dapibus diam nec consequat rutrum.',
                    'created_at'    => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at'    => Carbon::now()->format('Y-m-d H:i:s')
                ]
            ]
        );

        // DB::table('comments_parent_child')->insert(
        //     [
        //         [ 
        //             'parent_id' => 1,
        //             'child_id'  => 1
        //         ],
        //         [
        //             'parent_id' => 1,
        //             'child_id'  => 3
        //         ],
        //         [
        //             'parent_id' => 1,
        //             'child_id'  => 4
        //         ],
        //         [
        //             'parent_id' => 3,
        //             'child_id'  => 3
        //         ],
        //         [
        //             'parent_id' => 3,
        //             'child_id'  => 4
        //         ],
        //         [
        //             'parent_id' => 4,
        //             'child_id'  => 4
        //         ],
        //         [
        //             'parent_id' => 2,
        //             'child_id'  => 2
        //         ],
        //         [
        //             'parent_id' => 2,
        //             'child_id'  => 5
        //         ],
        //         [
        //             'parent_id' => 5,
        //             'child_id'  => 5
        //         ]
        //     ]
        // /);
        //$this->call(CommentSeeder::class);
    }
}
