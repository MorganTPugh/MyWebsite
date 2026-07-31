const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzenjqb";

export async function submitToFormspree(fields: Record<string, string>): Promise<boolean> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    return response.ok;
  } catch {
    return false;
  }
}
