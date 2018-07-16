import hash from "hash.js"

export default email => hash.sha256().update(email).digest('hex')

