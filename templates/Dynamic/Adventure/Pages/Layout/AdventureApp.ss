<% require css('adventure/client/dist/css/main.css') %>

<div class="adventure_game" data-api-url="$ApiUrl">
    <div class="todo">
        <header><h1>Todo list</h1></header>
        <div class="body flex flex--from-top">
            <p>Please wait... waking up the early bird.</p>
            <div class="loading flex__grow"></div>
        </div>
        <footer>My actions here</footer>
    </div>
</div>
<% require javascript('adventure/client/dist/js/vendor.js') %>
<% require javascript('adventure/client/dist/js/main.js') %>
