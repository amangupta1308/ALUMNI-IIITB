const base = "https://alumni-iiitb.onrender.com";

export const add_profile = async(obj) => {
    const res = await fetch(`${base}/api/student/add-profile`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'},
    });

    const ans = await res.json();
    return ans;
}

export const login_profile = async(obj) => {
    const res = await fetch(`${base}/api/student/login-profile`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'},
    });

    const ans = await res.json();
    // console.log(ans);
    // localStorage.setItem('token', ans.token);
    return ans;
}

export const get_all_profiles = async(obj) => {
    const res = await fetch(`${base}/api/student/get-all-profiles`, {
        method: 'GET',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'}
    });

    const ans = await res.json();
    return ans;
}

export const get_profiles_by_year = async(obj) => {
    const res = await fetch(`${base}/api/student/get-by-year`, {
        method: 'GET',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'}
    });

    const ans = await res.json();
    return ans;
}

export const get_all_programs = async(obj) => {
    const res = await fetch(`${base}/api/student/get-all-programs`, {
        method: 'GET',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'}
    });

    const ans = await res.json();
    return ans;
}
