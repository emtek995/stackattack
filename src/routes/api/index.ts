import type { RequestHandler } from "@sveltejs/kit";

export function get() {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            'status': 'ok',
        }
    }
}

export function put() {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            'status': 'ok',
        }
    }
}

export function post() {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            'status': 'ok',
        }
    }
}

export function del(request: RequestHandler) {
    console.log(request);
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            'status': 'ok',
        }
    }
}
