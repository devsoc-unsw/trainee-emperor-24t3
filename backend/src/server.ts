import { InputError, AccessError } from "./error";
import { getAuth } from "firebase/auth"

const auth = getAuth();

const login = async(email:string, password:string) => {
    if (!email) {
        throw new InputError('Must provide an email for user login');
    } else if (!password) {
        throw new InputError('Must provide a password for user login');
    }

    // const uId = await getUserIdFromEmail(email);
    if (!email === null) {
        throw new InputError('Invalid email');
    } else {
        // const res: {password: string} | null = await prisma.user.findUnique({
        //     where: {
        //         id: uId.id,
        //       },
        //       select: {
        //         password: true,
        //       },
        // })

        // if (res) {
        //     if (res.password !== password) {
        //         throw new InputError('Invalid password');
        //     } else {
        //         const token = jwt.sign({ uId }, JWT_SECRET, { algorithm: 'HS256', });
        //         return { token };
        //     }
        // } else {
        //     throw new Error('Login failed...');
        // }
    }
}

export { login }