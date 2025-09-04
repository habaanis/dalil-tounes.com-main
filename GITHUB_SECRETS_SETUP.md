# 🔐 Configuration des Secrets GitHub (Optionnel)

## 🎯 POURQUOI CONFIGURER GITHUB ?

Si vous utilisez GitHub pour :
- ✅ **Déploiement automatique** depuis GitHub vers Netlify
- ✅ **CI/CD** (Intégration Continue)
- ✅ **Actions GitHub** pour les tests automatiques

---

## 📋 ÉTAPE 1 : Accéder aux Secrets GitHub

### 📍 Navigation :
1. **Allez sur** : https://github.com/votre-username/votre-repo
2. **Cliquez sur "Settings"** (onglet en haut du repository)
3. **Dans le menu de gauche**, cliquez sur **"Secrets and variables"**
4. **Cliquez sur "Actions"**
5. **Cliquez sur "New repository secret"**

---

## 🔑 ÉTAPE 2 : Ajouter les Secrets

### Secrets à ajouter (un par un) :

```
Secret 1:
Name: VITE_SUPABASE_URL
Value: https://votre-projet-id.supabase.co

Secret 2:
Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Secret 3:
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Secret 4:
Name: GOOGLE_MAPS_API_KEY
Value: AIzaSyANJrHS7OFU12UiLgtPIliTGgVVNrQKTug

Secret 5 (optionnel):
Name: VITE_STRIPE_PUBLISHABLE_KEY
Value: pk_test_... ou pk_live_...

Secret 6 (optionnel):
Name: STRIPE_SECRET_KEY
Value: sk_test_... ou sk_live_...

Secret 7 (optionnel):
Name: STRIPE_WEBHOOK_SECRET
Value: whsec_...
```

---

## 🔄 ÉTAPE 3 : Configuration du Workflow (si nécessaire)

### Si vous voulez un déploiement automatique :

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      env:
        VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
        VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
        GOOGLE_MAPS_API_KEY: ${{ secrets.GOOGLE_MAPS_API_KEY }}
        VITE_STRIPE_PUBLISHABLE_KEY: ${{ secrets.VITE_STRIPE_PUBLISHABLE_KEY }}
        
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.0
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## ⚠️ IMPORTANT

### 🔒 **Sécurité** :
- ✅ **JAMAIS** commiter les fichiers `.env` dans GitHub
- ✅ **Toujours** utiliser les secrets pour les valeurs sensibles
- ✅ **Vérifier** que `.env` est dans `.gitignore`

### 📝 **Fichier .gitignore** :
```
# Environment variables
.env
.env.local
.env.production
.env.development

# Build
dist/
build/

# Dependencies
node_modules/

# Logs
*.log
```

---

## 🎯 RÉSULTAT

Avec cette configuration :
- ✅ **Secrets sécurisés** dans GitHub
- ✅ **Déploiement automatique** possible
- ✅ **CI/CD** configuré
- ✅ **Variables protégées** jamais exposées

---

**🔐 Vos secrets sont maintenant sécurisés !**