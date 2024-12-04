FROM node:latest

# Definir diretório de trabalho
WORKDIR /usr/src/api

# Copiar os arquivos da aplicação, incluindo o prisma e .env
COPY . .

# Instalar dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Gerar Prisma Client
RUN npx prisma generate

# Expor a porta 3001
EXPOSE 3001

# Rodar a aplicação
CMD ["npm", "run", "start"]
