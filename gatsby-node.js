// Implement the Gatsby API 'onCreatePage' This is called
// after every page is created.

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // Only Update the 'APP' Page
    if (page.path.match(/^\/Home/)) {
        // page.matchPath is special key that's used for matching Pages
        // with corresponding Routes with only routes
        page.matchPath = "/Home/*"  

        // Update the page
        createPage(page)
    }
}