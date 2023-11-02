import { Request, Response } from "express";

const logController = (req: Request, res: Response) => {
  const method = req.method;
  const timestamp = new Date().toLocaleString();

  console.log(`[${timestamp}] Metodo ${method} invocado en Get`);

  res.json({
    message: "Hola desde el controloador",
    method,
    timestamp,
  });
};

const postController = (req: Request, res: Response) => {
  const method = req.method;
  const timestamp = new Date().toLocaleString();

  console.log(req.headers.holis);

  console.log(`[${timestamp}] Metodo ${method} invocado en PostController`);

  const saludo = req.body.saludo;

  if (!saludo) {
    console.error(`[${timestamp}] FALTA EL SALUDO!`);
    res.status(400).json({
      error: "Falta el 'saludo'",
      method,
      timestamp,
    });
    return;
  }

  res.json({
    message: "Hola desde controloador post",
    recSaludo: saludo,
    method,
    timestamp,
  });
};

const newControllerRout = (req: Request, res: Response) => {
  const method = req.method;
  const timestamp = new Date().toLocaleString();

  console.log(`[${timestamp}] Metodo ${method} invocado en NewControllerRout`);

  res.json({
    message: "Hola desde la nueva ruta",
    method,
    timestamp,
  });
};

export { logController, postController, newControllerRout };
