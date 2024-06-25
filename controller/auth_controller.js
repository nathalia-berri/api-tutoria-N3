import jwt from 'jsonwebtoken';

// exemplo de rota protegida por token JWT
export const protectedExample = (req, res) => {
    console.log("Retorno do exemplo 'mockado'...");
    res.json([{ id: 1, nome: 'william' }]);
};

// função para realizar login e gerar token JWT
export const login = (req, res) => {
    const { user, pwd } = req.body;

    // verifica se as credenciais são válidas (exemplo simplificado)
    if (user === 'william' && pwd === '123') {
        const id = 1;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: '1h' // expira em 1 hora
        });
        return res.json({ auth: true, token: token });
    }

    res.status(401).json({ message: "Login Inválido!" });
};

// função para logout, invalidando o token
export const logout = (req, res) => {
    res.json({ auth: false, token: null });
};
