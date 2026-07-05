export async function POST(request) {
  const data = await request.json()
  const { name, email, phone, message } = data
  return Response.json({ status: 'success', message: "Thank you for reaching out! We'll get back to you soon." })
}
