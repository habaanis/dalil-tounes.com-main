# 🔧 Configuration Netlify + Supabase - Guide Rapide

## 🎯 OBJECTIF
Connecter votre base de données Supabase à votre site Netlify pour afficher vos établissements

---

## 📋 INFORMATIONS NÉCESSAIRES

Récupérez ces 3 informations depuis Supabase :

### 🗄️ **1. URL Supabase**
- **Allez sur** : https://supabase.com/dashboard
- **Votre projet** → **Settings** → **API**
- **Copiez "Project URL"** : `https://xxx.supabase.co`

### 🔑 **2. Clé Anonyme Supabase**
- **Même page** → **"anon/public" key**
- **Copiez** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### 🔐 **3. Clé Service Role**
- **Même page** → **"service_role" key**
- **Copiez** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## 🚀 CONFIGURATION SUR NETLIFY

### ÉTAPE 1 : Accès aux variables d'environnement

1. **Allez sur** : https://app.netlify.com
2. **Cliquez sur votre site** : "dalil-tounes"
3. **Site settings** → **Environment variables**

### ÉTAPE 2 : Ajouter les 3 variables Supabase

**Cliquez sur "Add variable" pour chacune :**

#### Variable 1 :
- **Key** : `VITE_SUPABASE_URL`
- **Value** : `https://votre-projet.supabase.co`

#### Variable 2 :
- **Key** : `VITE_SUPABASE_ANON_KEY`
- **Value** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

#### Variable 3 :
- **Key** : `SUPABASE_SERVICE_ROLE_KEY`
- **Value** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### ÉTAPE 3 : Redéploiement

1. **Onglet "Deploys"**
2. **"Trigger deploy"** → **"Deploy site"**
3. **Attendez 2-3 minutes**

---

## ✅ VÉRIFICATION

### Après le redéploiement :

1. **Ouvrez** : https://www.dalil-tounes.com
2. **Vous devriez voir** :
   - ✅ Message "🗄️ Données Supabase" 
   - ✅ Vos établissements sur la carte
   - ✅ Recherche dans vos données
   - ✅ Nombre d'établissements réel

---

## 📊 STRUCTURE SUPABASE

### Table `establishments` avec ces colonnes :

| Colonne | Type | Exemple |
|---------|------|---------|
| `name` | Text | "Hôpital Charles Nicolle" |
| `category` | Text | "sante" |
| `subcategory` | Text | "Hôpital public" |
| `description` | Text | "Grand hôpital public..." |
| `address` | Text | "Rue Charles Nicolle, Tunis" |
| `governorate` | Text | "tunis" |
| `phone` | Text | "+216 71 663 000" |
| `latitude` | Number | 36.8065 |
| `longitude` | Number | 10.1815 |
| `verified` | Boolean | true |
| `premium` | Boolean | false |

---

## 🎯 RÉSULTAT FINAL

Votre site affichera :
- 🗺️ **Tous vos établissements** Supabase sur la carte interactive
- 🔍 **Recherche** dans vos vraies données
- 📍 **Navigation GPS** vers chaque établissement
- 📝 **Suggestions** ajoutées directement à Supabase
- 🔄 **Synchronisation** automatique et rapide

---

## 🆘 AIDE

**Problème de connexion ?**
- Vérifiez l'orthographe exacte des variables
- Vérifiez que votre projet Supabase est accessible
- Regardez la console du navigateur (F12) pour les erreurs

**Pas d'établissements affichés ?**
- Vérifiez que la table `establishments` existe
- Vérifiez que la table contient des données
- Exécutez la migration SQL si pas encore fait

---

**🚀 Une fois configuré, votre carte affichera tous vos établissements Supabase !**