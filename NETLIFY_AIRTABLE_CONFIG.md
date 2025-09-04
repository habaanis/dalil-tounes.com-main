# 🔧 Configuration Airtable sur Netlify - Guide Rapide

## 🎯 OBJECTIF
Connecter votre base Airtable à votre site Netlify pour afficher vos vrais établissements

---

## 📋 INFORMATIONS NÉCESSAIRES

Avant de commencer, récupérez ces 3 informations depuis Airtable :

### 🔑 **1. Clé API Airtable**
- **Allez sur** : https://airtable.com/account
- **Section "API"** → **"Generate API key"**
- **Copiez** : `keyXXXXXXXXXXXXXX`

### 📊 **2. ID de Base Airtable**
- **Allez sur** : https://airtable.com/api
- **Sélectionnez votre base** (celle avec vos établissements)
- **Copiez l'ID** : `appXXXXXXXXXXXXXX`

### 📋 **3. Nom de Table**
- **Nom exact** de votre table dans Airtable
- **Exemple** : `Establishments`, `Établissements`, `Places`, etc.

---

## 🚀 CONFIGURATION SUR NETLIFY

### ÉTAPE 1 : Accès aux variables d'environnement

1. **Allez sur** : https://app.netlify.com
2. **Cliquez sur votre site** : "dalil-tounes"
3. **Site settings** → **Environment variables**

### ÉTAPE 2 : Ajouter les 3 variables Airtable

**Cliquez sur "Add variable" pour chacune :**

#### Variable 1 :
- **Key** : `VITE_AIRTABLE_API_KEY`
- **Value** : `keyXXXXXXXXXXXXXX` (votre vraie clé)

#### Variable 2 :
- **Key** : `VITE_AIRTABLE_BASE_ID`
- **Value** : `appXXXXXXXXXXXXXX` (votre vrai ID)

#### Variable 3 :
- **Key** : `VITE_AIRTABLE_TABLE_NAME`
- **Value** : `Establishments` (nom exact de votre table)

### ÉTAPE 3 : Redéploiement

1. **Onglet "Deploys"**
2. **"Trigger deploy"** → **"Deploy site"**
3. **Attendez 2-3 minutes**

---

## ✅ VÉRIFICATION

### Après le redéploiement :

1. **Ouvrez** : https://www.dalil-tounes.com
2. **Vous devriez voir** :
   - ✅ Message "Données Airtable" 
   - ✅ Vos établissements sur la carte
   - ✅ Recherche dans vos données
   - ✅ Nombre d'établissements réel

---

## 📊 STRUCTURE AIRTABLE RECOMMANDÉE

### Colonnes obligatoires dans votre table :

| Colonne | Type | Exemple |
|---------|------|---------|
| `Name` | Text | "Hôpital Charles Nicolle" |
| `Category` | Select | "sante" |
| `Subcategory` | Text | "Hôpital public" |
| `Description` | Long text | "Grand hôpital public..." |
| `Address` | Text | "Rue Charles Nicolle, Tunis" |
| `Governorate` | Select | "tunis" |
| `Phone` | Phone | "+216 71 663 000" |
| `Latitude` | Number | 36.8065 |
| `Longitude` | Number | 10.1815 |

### Colonnes optionnelles :
- `Email`, `Website`, `Hours`, `Services`, `Rating`, `ReviewCount`, `Verified`, `Premium`

---

## 🎯 RÉSULTAT FINAL

Votre site affichera :
- 🗺️ **Tous vos établissements** sur la carte interactive
- 🔍 **Recherche** dans vos vraies données
- 📍 **Navigation GPS** vers chaque établissement
- 📝 **Suggestions** ajoutées directement à Airtable
- 🔄 **Synchronisation** automatique

---

## 🆘 AIDE

**Problème de connexion ?**
- Vérifiez l'orthographe exacte des variables
- Vérifiez que votre table Airtable est accessible
- Regardez la console du navigateur (F12) pour les erreurs

**Pas d'établissements affichés ?**
- Vérifiez le nom exact de votre table
- Vérifiez que vos colonnes ont les bons noms
- Vérifiez que votre base contient des données

---

**🚀 Une fois configuré, votre site sera connecté à votre vraie base de données !**