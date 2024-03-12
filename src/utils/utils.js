export const child = {
    kind: "t3",
    data: {
        approved_at_utc: null,
        subreddit: "19684",
        selftext: "",
        author_fullname: "t2_4snw21o2",
        saved: false,
        mod_reason_title: null,
        gilded: 0,
        clicked: false,
        title: "cake recipe",
        link_flair_richtext: [],
        subreddit_name_prefixed: "r/19684",
        hidden: false,
        pwls: 7,
        link_flair_css_class: null,
        downs: 0,
        thumbnail_height: 140,
        top_awarded_type: null,
        hide_score: false,
        name: "t3_17e7r1i",
        quarantine: false,
        link_flair_text_color: "dark",
        upvote_ratio: 0.98,
        author_flair_background_color: null,
        subreddit_type: "public",
        ups: 1690,
        total_awards_received: 0,
        media_embed: {},
        thumbnail_width: 140,
        author_flair_template_id: null,
        is_original_content: false,
        user_reports: [],
        secure_media: null,
        is_reddit_media_domain: true,
        is_meta: false,
        category: null,
        secure_media_embed: {},
        link_flair_text: null,
        can_mod_post: false,
        score: 1690,
        approved_by: null,
        is_created_from_ads_ui: false,
        author_premium: false,
        thumbnail: "https://b.thumbs.redditmedia.com/_9P07qrJskJ14B_VYpMJOg2xsXwootr6cfeio7bJ9Xs.jpg",
        edited: false,
        author_flair_css_class: null,
        author_flair_richtext: [],
        gildings: {},
        post_hint: "image",
        content_categories: null,
        is_self: false,
        mod_note: null,
        created: 1698021189.0,
        link_flair_type: "text",
        wls: 7,
        removed_by_category: null,
        banned_by: null,
        author_flair_type: "text",
        domain: "i.redd.it",
        allow_live_comments: false,
        selftext_html: null,
        likes: null,
        suggested_sort: null,
        banned_at_utc: null,
        url_overridden_by_dest: "https://i.redd.it/7rbmnmvrkuvb1.png",
        view_count: null,
        archived: false,
        no_follow: false,
        is_crosspostable: true,
        pinned: false,
        over_18: false,
        preview: {
            images: [{
                source: {
                url: "https://preview.redd.it/7rbmnmvrkuvb1.png?auto=webp&amp;s=7ef4b374d0931410781c7a378376e800d6919463",
                width: 768,
                height: 960},
                resolutions: [{
                url: "https://preview.redd.it/7rbmnmvrkuvb1.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=7fdf0bd9c3a80d54fc3f7f84b56a77e0e5adb2c0",
                width: 108,
                height: 135}, {
                url: "https://preview.redd.it/7rbmnmvrkuvb1.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=c1743272f1810d27f2c453ef20114e1b8480130a",
                width: 216,
                height: 270}, {
                url: "https://preview.redd.it/7rbmnmvrkuvb1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=47b0c617f9634e9eae4e25e5eae0a5138f5b0a79",
                width: 320,
                height: 400}, {
                url: "https://preview.redd.it/7rbmnmvrkuvb1.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=40cc2d5f9321dc70eeed6b6338a07e801f013e5f",
                width: 640,
                height: 800}],
                variants: {},
                id: "wVlLaaQYp3PO2YZC0n_CVaOZbBlAlVx2qEMe4ms78qg"
            }],
            enabled: true
            },
        all_awardings: [],
        awarders: [],
        media_only: false,
        can_gild: false,
        spoiler: false,
        locked: false,
        author_flair_text: null,
        treatment_tags: [],
        visited: false,
        removed_by: null,
        num_reports: null,
        distinguished: null,
        subreddit_id: "t5_4xb40l",
        author_is_blocked: false,
        mod_reason_by: null,
        removal_reason: null,
        link_flair_background_color: "",
        id: "17e7r1i",
        is_robot_indexable: true,
        report_reasons: null,
        author: "6ix3eet",
        discussion_type: null,
        num_comments: 38,
        send_replies: true,
        whitelist_status: "some_ads",
        contest_mode: false,
        mod_reports: [],
        author_patreon_flair: false,
        author_flair_text_color: null,
        permalink: "/r/19684/comments/17e7r1i/cake_recipe/",
        parent_whitelist_status: "some_ads",
        stickied: false,
        url: "https://i.redd.it/7rbmnmvrkuvb1.png",
        subreddit_subscribers: 129355,
        created_utc: 1698021189.0,
        num_crossposts: 0,
        media: null,
        is_video: false}};
export const searchResults = {
    kind: "Listing",
    data: {
    modhash: "jiwgrdr3isce4968daec896020c7acf5fbee7b75797b70b5ec",
    dist: 25,
    facets: {},
    after: "t3_txoilz",
    geo_filter: "",
    children: [child, child, child, child, child, child, child, child, child, child, child],
    before: null
}};

export const fetchPostsBySearchTerm = async (searchTerm) => {
    // const response = await fetch('https://www.reddit.com/search.json?q=cake%20recipes');
    // const json = await response.json();
  
    // return json.data.children.map((post) => post.data);
  // const response = Promise.resolve(searchResults);
   return searchResults.data.children.map((child)=>child.data)
};

export const getAgeString = (created) =>{
    const createdob = new Date(created*1000);        
    const now = new Date();
    const mselapsed = now-createdob;//milliseconds since post creation
    if((mselapsed)<31556952000){//a year
        if((mselapsed)<2629746000){//a month
            if((mselapsed)<604800000){//a week
                if((mselapsed)<86400000){//a day
                    if((mselapsed)<3600000){//an hour
                        return `${Math.floor(mselapsed/60000)} minutes`;
                    } else{ return `${Math.floor(mselapsed/3600000)} hours`}
                } else{ return `${Math.floor(mselapsed/86400000)} days`}
            } else{ return `${Math.floor(mselapsed/604800000)} weeks`}
        } else{ return `${Math.floor(mselapsed/2629746000)} months`}
    } else{ return `${Math.floor(mselapsed/31556952000)} years`}
}