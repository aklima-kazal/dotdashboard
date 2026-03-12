export async function POST(request) {
  try {
    const response = Response.json(
      { message: 'Logout successful' },
      { status: 200 }
    );

    // Clear auth token cookie
    response.cookies.set('auth_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    return Response.json(
      { error: error.message || 'Logout failed' },
      { status: 500 }
    );
  }
}
