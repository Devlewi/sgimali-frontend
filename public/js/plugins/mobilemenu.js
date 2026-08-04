jQuery(window).on("load", function () {

    var $menu = jQuery("#menu");

    // Déplacer le menu directement sous <body> (comme sur l'ancien site)
    if (!$menu.parent().is("body")) {
        $menu.prependTo("body");
    }

    // Initialiser mmenu une seule fois
    if (!$menu.data("mmenu")) {

        $menu.mmenu({
            extensions: [
                "pagedim-black",
                "theme-dark"
            ],
            offCanvas: {
                position: "right"
            },
            counters: true,
            navbars: [
                {
                    position: "top",
                    content: ["searchfield"]
                },
                {
                    position: "top"
                },
                {
                    position: "bottom",
                    content: [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                    ]
                }
            ]
        });

    }

    // Récupérer l'API
    var api = $menu.data("mmenu");

    // Ouvrir le menu au clic sur le hamburger
    jQuery(document)
        .off("click.mmenu", ".btn-menu-mobile")
        .on("click.mmenu", ".btn-menu-mobile", function (e) {
            e.preventDefault();

            if (api) {
                api.open();
            }
        });

});