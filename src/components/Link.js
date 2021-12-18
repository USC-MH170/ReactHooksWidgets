import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        // if a control click is used, functions returns early to resume normal functions (opening window in new tab)
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        //stops everything from reloading on page
        event.preventDefault();
        //pushed the URL to the browser
        window.history.pushState({}, '', href)

        //communicates that the browser link is been updated. The Route will be listening for this.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }


    return (
    <a onClick={onClick} className={className} href={href}>
        {children}
    </a>
    )
}

export default Link;