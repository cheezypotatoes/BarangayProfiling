<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Organizations;

class OrganizationManagerController extends Controller
{
    //TODO: GET ALL DATA!
    public function show()
    {
        $UserRow = User::where('id', auth()->id())->first()->makeVisible('is_admin')->toArray();
        $organizationData = Organizations::all()->toArray();
        $userData = User::all()->toArray();
        return $UserRow['is_admin'] == 0 ? 
            redirect('/dashboard') : 
          
            Inertia::render('OrganizationManager', [
                "organizationData" => $organizationData,
                "userData" => $userData,
            ]);
    }
}
    