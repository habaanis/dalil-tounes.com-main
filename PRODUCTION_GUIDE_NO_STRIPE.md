# 🚀 Guide de Déploiement en Production - Dalil Tounes (Sans Stripe)

## ✅ ÉTAPE 1 : Configuration Supabase

### 1.1 Vérification de votre projet Supabase

1. **Connectez-vous à votre Dashboard Supabase** : https://supabase.com/dashboard
2. **Vérifiez votre projet** ou créez-en un nouveau
3. **Récupérez vos clés de production** :
   - Allez dans **Settings > API**
   - Copiez l'**URL du projet**
   - Copiez la **clé anon/public**
   - Copiez la **clé service_role** (gardez-la secrète !)

### 1.2 Configuration de la base de données

1. **Exécutez les migrations SQL** :
   - Allez dans **SQL Editor** dans Supabase
   - Créez une nouvelle requête
   - Copiez le contenu de `supabase/migrations/20250708060359_silent_island.sql`
   - Exécutez la requête

---

## ✅ ÉTAPE 2 : Configuration Google Maps

### 2.1 Création du projet Google Cloud

1. **Allez sur Google Cloud Console** : https://console.cloud.google.com/
2. **Créez un nouveau projet** ou sélectionnez un existant
3. **Activez les APIs nécessaires** :
   - Maps JavaScript API
   - Places API
   - Geocoding API

### 2.2 Création de la clé API

1. **Allez dans APIs & Services > Credentials**
2. **Cliquez sur "Create Credentials" > "API Key"**
3. **Restreignez votre clé** :
   - HTTP referrers : `https://votre-domaine.com/*`
   - API restrictions : Sélectionnez les 3 APIs activées

---

## ✅ ÉTAPE 3 : Configuration des variables d'environnement

Créez un fichier `.env` avec ces variables (sans Stripe) :

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre_cle_anon
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_role

# Google Maps Configuration
GOOGLE_MAPS_API_KEY=votre_cle_google_maps

# Stripe (désactivé pour l'instant)
# VITE_STRIPE_PUBLISHABLE_KEY=
# STRIPE_SECRET_KEY=
# STRIPE_WEBHOOK_SECRET=
```

---

## ✅ ÉTAPE 4 : Préparation du build

### 4.1 Désactivation temporaire de Stripe

Nous allons masquer les fonctionnalités de paiement :

1. **Test du build** :
   ```bash
   npm run build
   ```

2. **Vérification** :
   ```bash
   npm run preview
   ```

---

## ✅ ÉTAPE 5 : Déploiement sur Netlify

### 5.1 Préparation

1. **Créez un compte Netlify** : https://netlify.com
2. **Connectez votre repository GitHub** (optionnel)

### 5.2 Déploiement

**Option A : Drag & Drop (plus simple)**
1. Allez sur https://app.netlify.com
2. Glissez-déposez le dossier `dist/` sur Netlify
3. Votre site sera en ligne immédiatement !

**Option B : Git (recommandé)**
1. Connectez votre repository
2. Build command : `npm run build`
3. Publish directory : `dist`

### 5.3 Configuration des variables d'environnement sur Netlify

1. **Allez dans Site settings > Environment variables**
2. **Ajoutez vos variables** :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `GOOGLE_MAPS_API_KEY`

---

## ✅ ÉTAPE 6 : Configuration du domaine personnalisé

### 6.1 Domaine Netlify gratuit
Votre site aura une URL comme : `https://amazing-site-name.netlify.app`

### 6.2 Domaine personnalisé (optionnel)
1. **Achetez votre domaine** (ex: dalil-tounes.tn)
2. **Configurez les DNS** dans Netlify
3. **SSL automatique** sera activé

---

## 📋 Checklist de déploiement

- [ ] Projet Supabase configuré
- [ ] Base de données migrée
- [ ] Google Maps API configurée
- [ ] Variables d'environnement définies
- [ ] Build testé localement
- [ ] Site déployé sur Netlify
- [ ] Domaine configuré (optionnel)

---

## 🎯 Fonctionnalités disponibles sans Stripe

✅ **Disponibles** :
- Recherche d'établissements
- Filtres avancés
- Cartes interactives
- Suggestions d'établissements
- Interface multilingue
- PWA (installation mobile)
- Mode hors ligne

❌ **Désactivées temporairement** :
- Abonnements payants
- Plans premium
- Paiements Stripe

---

## 🔄 Ajout de Stripe plus tard

Quand vous serez prêt :
1. Activez votre compte Stripe
2. Ajoutez les variables Stripe dans Netlify
3. Redéployez automatiquement
4. Les fonctionnalités de paiement seront activées !

---

**Status : PRÊT POUR LE DÉPLOIEMENT SANS STRIPE** ✨