export default function getPosts() {
    const options = {
        referrer: 'no-referrer-when-downgrade',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetchPosts(options).then(posts_json => {
        return posts_json;
    });
}

export async function fetchPosts(options) {
    const response = await fetch('http://127.0.0.1:8000/api/getposts', options);
    const posts_json = await response.json();
    return posts_json;
}
