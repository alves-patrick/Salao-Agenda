const mongoose = require('mongoose');
const URI = '';



mongoose.set('useeNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect(URI)
.then(() => {
    console.log('Conectado ao MongoDB');
}
).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
}
);