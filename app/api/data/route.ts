
export async function GET(request: Request) {

    return Response.json( [
                {name : 'shiekwe0', content: 'estesetet0', date: '2023-03-01'},
                {name : 'shiekwe1', content: 'estesetet1', date: '2023-03-01'},
                {name : 'shiekwe2', content: 'estesetet2', date: '2023-03-01'},
                {name : 'shiekwe3', content: 'estesetet3', date: '2023-03-01'},
            ] , {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}