jQuery(document).ready(function($) {
    $.ajax({
        type: 'POST',
        url: 'http://192.168.0.77/sidharth/neword/wp-admin/admin-ajax.php',
        data: {
            action: 'my_query',
        },
        success: function(response) {
            var posts = response;
            var $postList = $('#post-list');

            $.each(posts, function(index, post) {
                var $post = $('<li class="post"></li>');
                var $title = $('<h2 class="title"></h2>').html(post.title);
                var $content = $('<div class="content"></div>').html(post.content);
                var $permalink = $('<a class="permalink" href="' + post.permalink + '">Read more</a>');

                $post.append($title);
                $post.append($content);
                $post.append($permalink);
                $postList.append($post);
            });
        }
    });
});
