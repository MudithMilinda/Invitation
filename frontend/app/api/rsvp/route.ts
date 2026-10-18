export async function POST(request: Request) {
    const endpoint = process.env.RSVP_SHEET_URL;
    const secret = process.env.RSVP_SHEET_SECRET;
    if (!endpoint || !secret) return Response.json({ error: "RSVP is not configured." }, { status: 503 });

    try {
        const data = await request.json();
        const name = typeof data.name === "string" ? data.name.trim() : "";
        const attendance = data.attendance;
        const guests = attendance === "accept" ? data.guests : 0;
        if (!name || name.length > 120 || !["accept", "decline"].includes(attendance) || !Number.isInteger(guests) || guests < (attendance === "accept" ? 1 : 0) || guests > 99) {
            return Response.json({ error: "Please check your response." }, { status: 400 });
        }
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secret, name, attendance, guests }),
            cache: "no-store",
        });
        const result = await response.json();
        if (!response.ok || result.ok !== true) throw new Error("Sheet rejected the response");
        return Response.json({ ok: true });
    } catch {
        return Response.json({ error: "Unable to save your response. Please try again." }, { status: 502 });
    }
}
