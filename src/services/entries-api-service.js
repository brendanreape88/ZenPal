import config from "../config";
import TokenService from "../services/token-service";

const EntriesApiService = {
  getEntriesForUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/${user_id}/entries`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postEntry(date, duration, text, user_id) {
    return fetch(`${config.API_ENDPOINT}/users/entries`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        date,
        duration,
        text,
        user_id,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  updateTextForEntry(text, entry_id) {
    return fetch(`${config.API_ENDPOINT}/users/entries/${entry_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ text }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteEntry(entry_id) {
    return fetch(`${config.API_ENDPOINT}/users/entries/${entry_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
};

export default EntriesApiService;
