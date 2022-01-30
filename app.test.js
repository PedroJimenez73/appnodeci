const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("Debe devolver un 'Hola Mundo'", async () => {
        const response = await request.get("/")
        expect(response.status).toBe(200)
        const body = JSON.parse(response.text);
        expect(body.message).toBe("¡Hola mundo!");
    })
})