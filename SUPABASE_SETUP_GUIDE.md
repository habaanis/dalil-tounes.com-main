# 🗄️ Guide de Configuration Supabase - Étape par Étape

## ✅ ÉTAPE 1 : Création/Vérification du projet Supabase

### 1.1 Accès au Dashboard
1. **Allez sur** : https://supabase.com/dashboard
2. **Connectez-vous** avec votre compte (ou créez-en un)
3. **Vérifiez** si vous avez déjà un projet ou **créez-en un nouveau**

### 1.2 Création d'un nouveau projet (si nécessaire)
1. Cliquez sur **"New project"**
2. **Nom du projet** : `dalil-tounes-prod` (ou votre choix)
3. **Mot de passe de la base de données** : Choisissez un mot de passe fort
4. **Région** : Choisissez la plus proche (Europe West pour la Tunisie)
5. **Plan** : Gratuit pour commencer
6. Cliquez sur **"Create new project"**

⏱️ **Temps d'attente** : 2-3 minutes pour la création

---

## ✅ ÉTAPE 2 : Récupération des clés API

### 2.1 Accès aux paramètres API
1. Dans votre projet, allez dans **Settings** (⚙️) dans la sidebar
2. Cliquez sur **"API"**

### 2.2 Copie des informations importantes
Copiez et sauvegardez ces informations :

```
📋 INFORMATIONS À COPIER :

1. Project URL : https://xxxxxxxxx.supabase.co
2. anon/public key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
3. service_role key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Important** : La `service_role` key est secrète, ne la partagez jamais !

---

## ✅ ÉTAPE 3 : Configuration de la base de données

### 3.1 Accès à l'éditeur SQL
1. Dans votre projet, allez dans **SQL Editor** dans la sidebar
2. Cliquez sur **"New query"**

### 3.2 Exécution de la migration
1. **Copiez** le contenu du fichier `supabase/migrations/20250708060359_silent_island.sql`
2. **Collez-le** dans l'éditeur SQL
3. Cliquez sur **"Run"** (ou Ctrl+Enter)

✅ **Résultat attendu** : Vous devriez voir "Success. No rows returned"

### 3.3 Vérification des tables créées
1. Allez dans **Table Editor** dans la sidebar
2. Vous devriez voir 2 nouvelles tables :
   - `subscriptions`
   - `payments`

---

## ✅ ÉTAPE 4 : Configuration des politiques de sécurité (RLS)

### 4.1 Vérification RLS
1. Dans **Table Editor**, cliquez sur la table `subscriptions`
2. Allez dans l'onglet **"Settings"**
3. Vérifiez que **"Enable Row Level Security"** est activé ✅

### 4.2 Vérification des politiques
1. Allez dans l'onglet **"Policies"**
2. Vous devriez voir 4 politiques :
   - Allow anonymous read subscriptions
   - Allow anonymous insert subscriptions
   - Users can read own subscriptions
   - Users can insert own subscriptions

Répétez pour la table `payments`.

---

## ✅ ÉTAPE 5 : Test de la connexion

### 5.1 Mise à jour du fichier .env
Créez ou mettez à jour votre fichier `.env` :

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://votre-projet-id.supabase.co
VITE_SUPABASE_ANON_KEY=votre_cle_anon_copiee
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_role_copiee

# Google Maps (on configurera après)
GOOGLE_MAPS_API_KEY=votre_cle_google_maps

# Stripe (désactivé pour l'instant)
# VITE_STRIPE_PUBLISHABLE_KEY=
# STRIPE_SECRET_KEY=
# STRIPE_WEBHOOK_SECRET=
```

### 5.2 Test local
1. **Lancez** votre application : `npm run dev`
2. **Vérifiez** qu'il n'y a pas d'erreurs de connexion Supabase
3. **Testez** la suggestion d'établissement (elle devrait fonctionner)

---

## ✅ ÉTAPE 6 : Configuration des fonctions Edge (optionnel)

### 6.1 Vérification des fonctions
1. Allez dans **Edge Functions** dans la sidebar
2. Vous devriez voir que les fonctions ne sont pas encore déployées

### 6.2 Note importante
Les fonctions Edge ne sont pas critiques pour le fonctionnement de base. Nous les configurerons plus tard si nécessaire.

---

## 📋 Checklist Supabase

- [ ] Projet Supabase créé/vérifié
- [ ] Clés API récupérées et sauvegardées
- [ ] Migration SQL exécutée avec succès
- [ ] Tables `subscriptions` et `payments` créées
- [ ] RLS activé sur les deux tables
- [ ] Politiques de sécurité configurées
- [ ] Fichier .env mis à jour
- [ ] Test local réussi

---

## 🎯 Prochaine étape

Une fois Supabase configuré, nous passerons à :
**Configuration Google Maps API**

---

## 🆘 Problèmes courants

### Erreur "Invalid API key"
- Vérifiez que vous avez copié la bonne clé
- Assurez-vous qu'il n'y a pas d'espaces avant/après

### Erreur SQL
- Vérifiez que vous avez copié tout le contenu du fichier de migration
- Essayez d'exécuter les commandes une par une

### Tables non créées
- Vérifiez dans **Table Editor** > **All tables**
- Rafraîchissez la page

---

**Status : SUPABASE EN COURS DE CONFIGURATION** 🔄